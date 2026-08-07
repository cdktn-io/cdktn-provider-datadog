# `incidentPostmortemTemplate` Submodule <a name="`incidentPostmortemTemplate` Submodule" id="@cdktn/provider-datadog.incidentPostmortemTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentPostmortemTemplate <a name="IncidentPostmortemTemplate" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template datadog_incident_postmortem_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/incidentpostmortemtemplate"

incidentpostmortemtemplate.NewIncidentPostmortemTemplate(scope Construct, id *string, config IncidentPostmortemTemplateConfig) IncidentPostmortemTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig">IncidentPostmortemTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig">IncidentPostmortemTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings">PutConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings">PutGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetConfluencePostmortemSettings">ResetConfluencePostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetGoogleDocsPostmortemSettings">ResetGoogleDocsPostmortemSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetIsDefault">ResetIsDefault</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetLocation">ResetLocation</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfluencePostmortemSettings` <a name="PutConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings"></a>

```go
func PutConfluencePostmortemSettings(value IncidentPostmortemTemplateConfluencePostmortemSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putConfluencePostmortemSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

---

##### `PutGoogleDocsPostmortemSettings` <a name="PutGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings"></a>

```go
func PutGoogleDocsPostmortemSettings(value IncidentPostmortemTemplateGoogleDocsPostmortemSettings)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.putGoogleDocsPostmortemSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

---

##### `ResetConfluencePostmortemSettings` <a name="ResetConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetConfluencePostmortemSettings"></a>

```go
func ResetConfluencePostmortemSettings()
```

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetContent"></a>

```go
func ResetContent()
```

##### `ResetGoogleDocsPostmortemSettings` <a name="ResetGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetGoogleDocsPostmortemSettings"></a>

```go
func ResetGoogleDocsPostmortemSettings()
```

##### `ResetIsDefault` <a name="ResetIsDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetIsDefault"></a>

```go
func ResetIsDefault()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.resetLocation"></a>

```go
func ResetLocation()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentPostmortemTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/incidentpostmortemtemplate"

incidentpostmortemtemplate.IncidentPostmortemTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/incidentpostmortemtemplate"

incidentpostmortemtemplate.IncidentPostmortemTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/incidentpostmortemtemplate"

incidentpostmortemtemplate.IncidentPostmortemTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/incidentpostmortemtemplate"

incidentpostmortemtemplate.IncidentPostmortemTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IncidentPostmortemTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IncidentPostmortemTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IncidentPostmortemTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IncidentPostmortemTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettings">ConfluencePostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference">IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettings">GoogleDocsPostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference">IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lastModifiedByUser">LastModifiedByUser</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.modified">Modified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettingsInput">ConfluencePostmortemSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettingsInput">GoogleDocsPostmortemSettingsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentTypeInput">IncidentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefaultInput">IsDefaultInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.locationInput">LocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentType">IncidentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.location">Location</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfluencePostmortemSettings`<sup>Required</sup> <a name="ConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettings"></a>

```go
func ConfluencePostmortemSettings() IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference">IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference</a>

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `GoogleDocsPostmortemSettings`<sup>Required</sup> <a name="GoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettings"></a>

```go
func GoogleDocsPostmortemSettings() IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference">IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModifiedByUser`<sup>Required</sup> <a name="LastModifiedByUser" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.lastModifiedByUser"></a>

```go
func LastModifiedByUser() *string
```

- *Type:* *string

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.modified"></a>

```go
func Modified() *string
```

- *Type:* *string

---

##### `ConfluencePostmortemSettingsInput`<sup>Optional</sup> <a name="ConfluencePostmortemSettingsInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.confluencePostmortemSettingsInput"></a>

```go
func ConfluencePostmortemSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `GoogleDocsPostmortemSettingsInput`<sup>Optional</sup> <a name="GoogleDocsPostmortemSettingsInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.googleDocsPostmortemSettingsInput"></a>

```go
func GoogleDocsPostmortemSettingsInput() interface{}
```

- *Type:* interface{}

---

##### `IncidentTypeInput`<sup>Optional</sup> <a name="IncidentTypeInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentTypeInput"></a>

```go
func IncidentTypeInput() *string
```

- *Type:* *string

---

##### `IsDefaultInput`<sup>Optional</sup> <a name="IsDefaultInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefaultInput"></a>

```go
func IsDefaultInput() interface{}
```

- *Type:* interface{}

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.locationInput"></a>

```go
func LocationInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.incidentType"></a>

```go
func IncidentType() *string
```

- *Type:* *string

---

##### `IsDefault`<sup>Required</sup> <a name="IsDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.isDefault"></a>

```go
func IsDefault() interface{}
```

- *Type:* interface{}

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.location"></a>

```go
func Location() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentPostmortemTemplateConfig <a name="IncidentPostmortemTemplateConfig" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/incidentpostmortemtemplate"

&incidentpostmortemtemplate.IncidentPostmortemTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IncidentType: *string,
	Name: *string,
	ConfluencePostmortemSettings: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings,
	Content: *string,
	GoogleDocsPostmortemSettings: github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings,
	IsDefault: interface{},
	Location: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.incidentType">IncidentType</a></code> | <code>*string</code> | The ID of the incident type this template is associated with. Immutable after creation. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the template. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.confluencePostmortemSettings">ConfluencePostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a></code> | confluence_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.content">Content</a></code> | <code>*string</code> | The templated content of the postmortem, supporting Markdown and incident template variables. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.googleDocsPostmortemSettings">GoogleDocsPostmortemSettings</a></code> | <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a></code> | google_docs_postmortem_settings block. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.isDefault">IsDefault</a></code> | <code>interface{}</code> | Whether this template is a default for its incident type. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.location">Location</a></code> | <code>*string</code> | The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.incidentType"></a>

```go
IncidentType *string
```

- *Type:* *string

The ID of the incident type this template is associated with. Immutable after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#incident_type IncidentPostmortemTemplate#incident_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#name IncidentPostmortemTemplate#name}

---

##### `ConfluencePostmortemSettings`<sup>Optional</sup> <a name="ConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.confluencePostmortemSettings"></a>

```go
ConfluencePostmortemSettings IncidentPostmortemTemplateConfluencePostmortemSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings">IncidentPostmortemTemplateConfluencePostmortemSettings</a>

confluence_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#confluence_postmortem_settings IncidentPostmortemTemplate#confluence_postmortem_settings}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.content"></a>

```go
Content *string
```

- *Type:* *string

The templated content of the postmortem, supporting Markdown and incident template variables.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#content IncidentPostmortemTemplate#content}

---

##### `GoogleDocsPostmortemSettings`<sup>Optional</sup> <a name="GoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.googleDocsPostmortemSettings"></a>

```go
GoogleDocsPostmortemSettings IncidentPostmortemTemplateGoogleDocsPostmortemSettings
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings">IncidentPostmortemTemplateGoogleDocsPostmortemSettings</a>

google_docs_postmortem_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#google_docs_postmortem_settings IncidentPostmortemTemplate#google_docs_postmortem_settings}

---

##### `IsDefault`<sup>Optional</sup> <a name="IsDefault" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.isDefault"></a>

```go
IsDefault interface{}
```

- *Type:* interface{}

Whether this template is a default for its incident type.

The API stores a timestamp; the effective default for an incident type is the template with the most recent default timestamp.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#is_default IncidentPostmortemTemplate#is_default}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfig.property.location"></a>

```go
Location *string
```

- *Type:* *string

The location where the postmortem is created and stored. Valid values are: datadog_notebooks, confluence, google_docs. Defaults to datadog_notebooks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#location IncidentPostmortemTemplate#location}

---

### IncidentPostmortemTemplateConfluencePostmortemSettings <a name="IncidentPostmortemTemplateConfluencePostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/incidentpostmortemtemplate"

&incidentpostmortemtemplate.IncidentPostmortemTemplateConfluencePostmortemSettings {
	AccountId: *string,
	ParentId: *string,
	SpaceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.accountId">AccountId</a></code> | <code>*string</code> | The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`). |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.parentId">ParentId</a></code> | <code>*string</code> | The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.spaceId">SpaceId</a></code> | <code>*string</code> | The Confluence space key (e.g. `ENG`), not a numeric space ID. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The ID of the Confluence account, a Datadog connected-account UUID (e.g. `3f9b1c2a-8d4e-4a11-9c2f-0b7e5d6a1f23`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

##### `ParentId`<sup>Optional</sup> <a name="ParentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.parentId"></a>

```go
ParentId *string
```

- *Type:* *string

The ID of the parent Confluence page under which postmortems are created: a numeric page ID (e.g. `393217`), not a page path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#parent_id IncidentPostmortemTemplate#parent_id}

---

##### `SpaceId`<sup>Optional</sup> <a name="SpaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettings.property.spaceId"></a>

```go
SpaceId *string
```

- *Type:* *string

The Confluence space key (e.g. `ENG`), not a numeric space ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#space_id IncidentPostmortemTemplate#space_id}

---

### IncidentPostmortemTemplateGoogleDocsPostmortemSettings <a name="IncidentPostmortemTemplateGoogleDocsPostmortemSettings" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/incidentpostmortemtemplate"

&incidentpostmortemtemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings {
	AccountId: *string,
	ParentFolderId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.accountId">AccountId</a></code> | <code>*string</code> | The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`). |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.parentFolderId">ParentFolderId</a></code> | <code>*string</code> | The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`). |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

The ID of the Google Drive account, a Datadog connected-account UUID (e.g. `a1b2c3d4-e5f6-4789-8abc-1234567890ab`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#account_id IncidentPostmortemTemplate#account_id}

---

##### `ParentFolderId`<sup>Optional</sup> <a name="ParentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettings.property.parentFolderId"></a>

```go
ParentFolderId *string
```

- *Type:* *string

The Google Drive folder ID where postmortems are created, taken from the folder URL (e.g. `1eCqLAKQqRHt49J2aqQLGUcnPMzGHkt2B`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.17.0/docs/resources/incident_postmortem_template#parent_folder_id IncidentPostmortemTemplate#parent_folder_id}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference <a name="IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/incidentpostmortemtemplate"

incidentpostmortemtemplate.NewIncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetParentId">ResetParentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetSpaceId">ResetSpaceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetParentId` <a name="ResetParentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetParentId"></a>

```go
func ResetParentId()
```

##### `ResetSpaceId` <a name="ResetSpaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.resetSpaceId"></a>

```go
func ResetSpaceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentIdInput">ParentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceIdInput">SpaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentId">ParentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceId">SpaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ParentIdInput`<sup>Optional</sup> <a name="ParentIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentIdInput"></a>

```go
func ParentIdInput() *string
```

- *Type:* *string

---

##### `SpaceIdInput`<sup>Optional</sup> <a name="SpaceIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceIdInput"></a>

```go
func SpaceIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ParentId`<sup>Required</sup> <a name="ParentId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.parentId"></a>

```go
func ParentId() *string
```

- *Type:* *string

---

##### `SpaceId`<sup>Required</sup> <a name="SpaceId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.spaceId"></a>

```go
func SpaceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateConfluencePostmortemSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference <a name="IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/incidentpostmortemtemplate"

incidentpostmortemtemplate.NewIncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetParentFolderId">ResetParentFolderId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetParentFolderId` <a name="ResetParentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.resetParentFolderId"></a>

```go
func ResetParentFolderId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderIdInput">ParentFolderIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderId">ParentFolderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `ParentFolderIdInput`<sup>Optional</sup> <a name="ParentFolderIdInput" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderIdInput"></a>

```go
func ParentFolderIdInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ParentFolderId`<sup>Required</sup> <a name="ParentFolderId" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.parentFolderId"></a>

```go
func ParentFolderId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentPostmortemTemplate.IncidentPostmortemTemplateGoogleDocsPostmortemSettingsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



