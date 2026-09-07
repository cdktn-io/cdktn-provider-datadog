# `statusPageDegradationTemplate` Submodule <a name="`statusPageDegradationTemplate` Submodule" id="@cdktn/provider-datadog.statusPageDegradationTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StatusPageDegradationTemplate <a name="StatusPageDegradationTemplate" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template datadog_status_page_degradation_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

statuspagedegradationtemplate.NewStatusPageDegradationTemplate(scope Construct, id *string, config StatusPageDegradationTemplateConfig) StatusPageDegradationTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig">StatusPageDegradationTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig">StatusPageDegradationTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected">PutComponentsAffected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates">PutUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetComponentsAffected">ResetComponentsAffected</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetDegradationTitle">ResetDegradationTitle</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetUpdates">ResetUpdates</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponentsAffected` <a name="PutComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected"></a>

```go
func PutComponentsAffected(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putComponentsAffected.parameter.value"></a>

- *Type:* interface{}

---

##### `PutUpdates` <a name="PutUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates"></a>

```go
func PutUpdates(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.putUpdates.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetComponentsAffected` <a name="ResetComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetComponentsAffected"></a>

```go
func ResetComponentsAffected()
```

##### `ResetDegradationTitle` <a name="ResetDegradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetDegradationTitle"></a>

```go
func ResetDegradationTitle()
```

##### `ResetUpdates` <a name="ResetUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.resetUpdates"></a>

```go
func ResetUpdates()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

statuspagedegradationtemplate.StatusPageDegradationTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

statuspagedegradationtemplate.StatusPageDegradationTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

statuspagedegradationtemplate.StatusPageDegradationTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

statuspagedegradationtemplate.StatusPageDegradationTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a StatusPageDegradationTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the StatusPageDegradationTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing StatusPageDegradationTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the StatusPageDegradationTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffected">ComponentsAffected</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList">StatusPageDegradationTemplateComponentsAffectedList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updates">Updates</a></code> | <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList">StatusPageDegradationTemplateUpdatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffectedInput">ComponentsAffectedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitleInput">DegradationTitleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageIdInput">PageIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updatesInput">UpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitle">DegradationTitle</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageId">PageId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ComponentsAffected`<sup>Required</sup> <a name="ComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffected"></a>

```go
func ComponentsAffected() StatusPageDegradationTemplateComponentsAffectedList
```

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList">StatusPageDegradationTemplateComponentsAffectedList</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `Updates`<sup>Required</sup> <a name="Updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updates"></a>

```go
func Updates() StatusPageDegradationTemplateUpdatesList
```

- *Type:* <a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList">StatusPageDegradationTemplateUpdatesList</a>

---

##### `ComponentsAffectedInput`<sup>Optional</sup> <a name="ComponentsAffectedInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.componentsAffectedInput"></a>

```go
func ComponentsAffectedInput() interface{}
```

- *Type:* interface{}

---

##### `DegradationTitleInput`<sup>Optional</sup> <a name="DegradationTitleInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitleInput"></a>

```go
func DegradationTitleInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PageIdInput`<sup>Optional</sup> <a name="PageIdInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageIdInput"></a>

```go
func PageIdInput() *string
```

- *Type:* *string

---

##### `UpdatesInput`<sup>Optional</sup> <a name="UpdatesInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.updatesInput"></a>

```go
func UpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `DegradationTitle`<sup>Required</sup> <a name="DegradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.degradationTitle"></a>

```go
func DegradationTitle() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.pageId"></a>

```go
func PageId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### StatusPageDegradationTemplateComponentsAffected <a name="StatusPageDegradationTemplateComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

&statuspagedegradationtemplate.StatusPageDegradationTemplateComponentsAffected {
	Id: *string,
	Status: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.id">Id</a></code> | <code>*string</code> | The ID of the affected component. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.status">Status</a></code> | <code>*string</code> | The pre-filled status for this component. Valid values are: operational, degraded, partial_outage, major_outage. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.name">Name</a></code> | <code>*string</code> | The name of the affected component. |

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.id"></a>

```go
Id *string
```

- *Type:* *string

The ID of the affected component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#id StatusPageDegradationTemplate#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.status"></a>

```go
Status *string
```

- *Type:* *string

The pre-filled status for this component. Valid values are: operational, degraded, partial_outage, major_outage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffected.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the affected component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

### StatusPageDegradationTemplateConfig <a name="StatusPageDegradationTemplateConfig" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

&statuspagedegradationtemplate.StatusPageDegradationTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	PageId: *string,
	ComponentsAffected: interface{},
	DegradationTitle: *string,
	Updates: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the degradation template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.pageId">PageId</a></code> | <code>*string</code> | The ID of the status page this degradation template belongs to. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.componentsAffected">ComponentsAffected</a></code> | <code>interface{}</code> | The components affected by a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.degradationTitle">DegradationTitle</a></code> | <code>*string</code> | The title used for a degradation created from this template. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.updates">Updates</a></code> | <code>interface{}</code> | The pre-filled updates for a degradation created from this template. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the degradation template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#name StatusPageDegradationTemplate#name}

---

##### `PageId`<sup>Required</sup> <a name="PageId" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.pageId"></a>

```go
PageId *string
```

- *Type:* *string

The ID of the status page this degradation template belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#page_id StatusPageDegradationTemplate#page_id}

---

##### `ComponentsAffected`<sup>Optional</sup> <a name="ComponentsAffected" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.componentsAffected"></a>

```go
ComponentsAffected interface{}
```

- *Type:* interface{}

The components affected by a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#components_affected StatusPageDegradationTemplate#components_affected}

---

##### `DegradationTitle`<sup>Optional</sup> <a name="DegradationTitle" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.degradationTitle"></a>

```go
DegradationTitle *string
```

- *Type:* *string

The title used for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#degradation_title StatusPageDegradationTemplate#degradation_title}

---

##### `Updates`<sup>Optional</sup> <a name="Updates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateConfig.property.updates"></a>

```go
Updates interface{}
```

- *Type:* interface{}

The pre-filled updates for a degradation created from this template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#updates StatusPageDegradationTemplate#updates}

---

### StatusPageDegradationTemplateUpdates <a name="StatusPageDegradationTemplateUpdates" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

&statuspagedegradationtemplate.StatusPageDegradationTemplateUpdates {
	Status: *string,
	Message: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.status">Status</a></code> | <code>*string</code> | The pre-filled degradation status for this update. Valid values are: investigating, identified, monitoring, resolved. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.message">Message</a></code> | <code>*string</code> | The pre-filled message for this update. |

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.status"></a>

```go
Status *string
```

- *Type:* *string

The pre-filled degradation status for this update. Valid values are: investigating, identified, monitoring, resolved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#status StatusPageDegradationTemplate#status}

---

##### `Message`<sup>Optional</sup> <a name="Message" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdates.property.message"></a>

```go
Message *string
```

- *Type:* *string

The pre-filled message for this update.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.20.0/docs/resources/status_page_degradation_template#message StatusPageDegradationTemplate#message}

---

## Classes <a name="Classes" id="Classes"></a>

### StatusPageDegradationTemplateComponentsAffectedList <a name="StatusPageDegradationTemplateComponentsAffectedList" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

statuspagedegradationtemplate.NewStatusPageDegradationTemplateComponentsAffectedList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatusPageDegradationTemplateComponentsAffectedList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get"></a>

```go
func Get(index *f64) StatusPageDegradationTemplateComponentsAffectedOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatusPageDegradationTemplateComponentsAffectedOutputReference <a name="StatusPageDegradationTemplateComponentsAffectedOutputReference" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

statuspagedegradationtemplate.NewStatusPageDegradationTemplateComponentsAffectedOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatusPageDegradationTemplateComponentsAffectedOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateComponentsAffectedOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatusPageDegradationTemplateUpdatesList <a name="StatusPageDegradationTemplateUpdatesList" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

statuspagedegradationtemplate.NewStatusPageDegradationTemplateUpdatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) StatusPageDegradationTemplateUpdatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get"></a>

```go
func Get(index *f64) StatusPageDegradationTemplateUpdatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### StatusPageDegradationTemplateUpdatesOutputReference <a name="StatusPageDegradationTemplateUpdatesOutputReference" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/statuspagedegradationtemplate"

statuspagedegradationtemplate.NewStatusPageDegradationTemplateUpdatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) StatusPageDegradationTemplateUpdatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resetMessage">ResetMessage</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessage` <a name="ResetMessage" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.resetMessage"></a>

```go
func ResetMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.messageInput">MessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.statusInput">StatusInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.message">Message</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessageInput`<sup>Optional</sup> <a name="MessageInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.messageInput"></a>

```go
func MessageInput() *string
```

- *Type:* *string

---

##### `StatusInput`<sup>Optional</sup> <a name="StatusInput" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.statusInput"></a>

```go
func StatusInput() *string
```

- *Type:* *string

---

##### `Message`<sup>Required</sup> <a name="Message" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.message"></a>

```go
func Message() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.statusPageDegradationTemplate.StatusPageDegradationTemplateUpdatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



