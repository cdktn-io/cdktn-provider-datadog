# `incidentUserDefinedField` Submodule <a name="`incidentUserDefinedField` Submodule" id="@cdktn/provider-datadog.incidentUserDefinedField"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IncidentUserDefinedField <a name="IncidentUserDefinedField" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field datadog_incident_user_defined_field}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/incidentuserdefinedfield"

incidentuserdefinedfield.NewIncidentUserDefinedField(scope Construct, id *string, config IncidentUserDefinedFieldConfig) IncidentUserDefinedField
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig">IncidentUserDefinedFieldConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig">IncidentUserDefinedFieldConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue">PutValidValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDefaultValue">ResetDefaultValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDisplayName">ResetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOrdinal">ResetOrdinal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetTagKey">ResetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetValidValue">ResetValidValue</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutValidValue` <a name="PutValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue"></a>

```go
func PutValidValue(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.putValidValue.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetDefaultValue` <a name="ResetDefaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDefaultValue"></a>

```go
func ResetDefaultValue()
```

##### `ResetDisplayName` <a name="ResetDisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetDisplayName"></a>

```go
func ResetDisplayName()
```

##### `ResetOrdinal` <a name="ResetOrdinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetOrdinal"></a>

```go
func ResetOrdinal()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetRequired"></a>

```go
func ResetRequired()
```

##### `ResetTagKey` <a name="ResetTagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetTagKey"></a>

```go
func ResetTagKey()
```

##### `ResetValidValue` <a name="ResetValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.resetValidValue"></a>

```go
func ResetValidValue()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IncidentUserDefinedField resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/incidentuserdefinedfield"

incidentuserdefinedfield.IncidentUserDefinedField_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/incidentuserdefinedfield"

incidentuserdefinedfield.IncidentUserDefinedField_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/incidentuserdefinedfield"

incidentuserdefinedfield.IncidentUserDefinedField_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/incidentuserdefinedfield"

incidentuserdefinedfield.IncidentUserDefinedField_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IncidentUserDefinedField resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IncidentUserDefinedField to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IncidentUserDefinedField that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IncidentUserDefinedField to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.created">Created</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.deleted">Deleted</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.metadata">Metadata</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference">IncidentUserDefinedFieldMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.modified">Modified</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.reserved">Reserved</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValue">ValidValue</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList">IncidentUserDefinedFieldValidValueList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValueInput">DefaultValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentTypeInput">IncidentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinalInput">OrdinalInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.requiredInput">RequiredInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKeyInput">TagKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValueInput">ValidValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentType">IncidentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinal">Ordinal</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.required">Required</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKey">TagKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.created"></a>

```go
func Created() *string
```

- *Type:* *string

---

##### `Deleted`<sup>Required</sup> <a name="Deleted" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.deleted"></a>

```go
func Deleted() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Metadata`<sup>Required</sup> <a name="Metadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.metadata"></a>

```go
func Metadata() IncidentUserDefinedFieldMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference">IncidentUserDefinedFieldMetadataOutputReference</a>

---

##### `Modified`<sup>Required</sup> <a name="Modified" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.modified"></a>

```go
func Modified() *string
```

- *Type:* *string

---

##### `Reserved`<sup>Required</sup> <a name="Reserved" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.reserved"></a>

```go
func Reserved() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `ValidValue`<sup>Required</sup> <a name="ValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValue"></a>

```go
func ValidValue() IncidentUserDefinedFieldValidValueList
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList">IncidentUserDefinedFieldValidValueList</a>

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DefaultValueInput`<sup>Optional</sup> <a name="DefaultValueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValueInput"></a>

```go
func DefaultValueInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `IncidentTypeInput`<sup>Optional</sup> <a name="IncidentTypeInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentTypeInput"></a>

```go
func IncidentTypeInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OrdinalInput`<sup>Optional</sup> <a name="OrdinalInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinalInput"></a>

```go
func OrdinalInput() *string
```

- *Type:* *string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.requiredInput"></a>

```go
func RequiredInput() interface{}
```

- *Type:* interface{}

---

##### `TagKeyInput`<sup>Optional</sup> <a name="TagKeyInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKeyInput"></a>

```go
func TagKeyInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ValidValueInput`<sup>Optional</sup> <a name="ValidValueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.validValueInput"></a>

```go
func ValidValueInput() interface{}
```

- *Type:* interface{}

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `DefaultValue`<sup>Required</sup> <a name="DefaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.defaultValue"></a>

```go
func DefaultValue() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.incidentType"></a>

```go
func IncidentType() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Ordinal`<sup>Required</sup> <a name="Ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.ordinal"></a>

```go
func Ordinal() *string
```

- *Type:* *string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.required"></a>

```go
func Required() interface{}
```

- *Type:* interface{}

---

##### `TagKey`<sup>Required</sup> <a name="TagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tagKey"></a>

```go
func TagKey() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedField.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IncidentUserDefinedFieldConfig <a name="IncidentUserDefinedFieldConfig" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/incidentuserdefinedfield"

&incidentuserdefinedfield.IncidentUserDefinedFieldConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	IncidentType: *string,
	Name: *string,
	Type: *string,
	Category: *string,
	DefaultValue: *string,
	DisplayName: *string,
	Ordinal: *string,
	Required: interface{},
	TagKey: *string,
	ValidValue: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.incidentType">IncidentType</a></code> | <code>*string</code> | The ID of the incident type this field is associated with. Changing the incident type forces a new resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.name">Name</a></code> | <code>*string</code> | The unique identifier of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.type">Type</a></code> | <code>*string</code> | The data type of the field. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.category">Category</a></code> | <code>*string</code> | The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.defaultValue">DefaultValue</a></code> | <code>*string</code> | The default value for the field. Must be one of the valid values when `valid_values` is set. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.ordinal">Ordinal</a></code> | <code>*string</code> | A decimal string representing the field's display order in the UI. Assigned by the server when not provided. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.required">Required</a></code> | <code>interface{}</code> | When true, users must fill out this field on incidents. Defaults to `false`. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.tagKey">TagKey</a></code> | <code>*string</code> | For metric tag-type fields only, the metric tag key that powers the autocomplete options. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.validValue">ValidValue</a></code> | <code>interface{}</code> | valid_value block. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `IncidentType`<sup>Required</sup> <a name="IncidentType" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.incidentType"></a>

```go
IncidentType *string
```

- *Type:* *string

The ID of the incident type this field is associated with. Changing the incident type forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#incident_type IncidentUserDefinedField#incident_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The unique identifier of the field.

Must start with a letter or digit and contain only letters, digits, underscores, or periods. Changing the name forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#name IncidentUserDefinedField#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The data type of the field.

Changing the type forces a new resource. Valid values are `dropdown`, `multiselect`, `textbox`, `textarray`, `metrictag`, `autocomplete`, `number`, `datetime`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#type IncidentUserDefinedField#type}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

The section in which the field appears: `what_happened` or `why_it_happened`. When unset, the field appears in the Attributes section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#category IncidentUserDefinedField#category}

---

##### `DefaultValue`<sup>Optional</sup> <a name="DefaultValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.defaultValue"></a>

```go
DefaultValue *string
```

- *Type:* *string

The default value for the field. Must be one of the valid values when `valid_values` is set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#default_value IncidentUserDefinedField#default_value}

---

##### `DisplayName`<sup>Optional</sup> <a name="DisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable name shown in the UI. Defaults to a formatted version of the name if not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `Ordinal`<sup>Optional</sup> <a name="Ordinal" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.ordinal"></a>

```go
Ordinal *string
```

- *Type:* *string

A decimal string representing the field's display order in the UI. Assigned by the server when not provided.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#ordinal IncidentUserDefinedField#ordinal}

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.required"></a>

```go
Required interface{}
```

- *Type:* interface{}

When true, users must fill out this field on incidents. Defaults to `false`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#required IncidentUserDefinedField#required}

---

##### `TagKey`<sup>Optional</sup> <a name="TagKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.tagKey"></a>

```go
TagKey *string
```

- *Type:* *string

For metric tag-type fields only, the metric tag key that powers the autocomplete options.

Changing the tag key forces a new resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#tag_key IncidentUserDefinedField#tag_key}

---

##### `ValidValue`<sup>Optional</sup> <a name="ValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldConfig.property.validValue"></a>

```go
ValidValue interface{}
```

- *Type:* interface{}

valid_value block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#valid_value IncidentUserDefinedField#valid_value}

---

### IncidentUserDefinedFieldMetadata <a name="IncidentUserDefinedFieldMetadata" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/incidentuserdefinedfield"

&incidentuserdefinedfield.IncidentUserDefinedFieldMetadata {

}
```


### IncidentUserDefinedFieldValidValue <a name="IncidentUserDefinedFieldValidValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/incidentuserdefinedfield"

&incidentuserdefinedfield.IncidentUserDefinedFieldValidValue {
	DisplayName: *string,
	Value: *string,
	Description: *string,
	ShortDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.displayName">DisplayName</a></code> | <code>*string</code> | The human-readable display name for this value. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.value">Value</a></code> | <code>*string</code> | The identifier that is stored when this option is selected. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.description">Description</a></code> | <code>*string</code> | A detailed description of the valid value. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | A short description of the valid value. |

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.displayName"></a>

```go
DisplayName *string
```

- *Type:* *string

The human-readable display name for this value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#display_name IncidentUserDefinedField#display_name}

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.value"></a>

```go
Value *string
```

- *Type:* *string

The identifier that is stored when this option is selected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#value IncidentUserDefinedField#value}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.description"></a>

```go
Description *string
```

- *Type:* *string

A detailed description of the valid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#description IncidentUserDefinedField#description}

---

##### `ShortDescription`<sup>Optional</sup> <a name="ShortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValue.property.shortDescription"></a>

```go
ShortDescription *string
```

- *Type:* *string

A short description of the valid value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.16.0/docs/resources/incident_user_defined_field#short_description IncidentUserDefinedField#short_description}

---

## Classes <a name="Classes" id="Classes"></a>

### IncidentUserDefinedFieldMetadataOutputReference <a name="IncidentUserDefinedFieldMetadataOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/incidentuserdefinedfield"

incidentuserdefinedfield.NewIncidentUserDefinedFieldMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IncidentUserDefinedFieldMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchLimitParam">SearchLimitParam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchParams">SearchParams</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchQueryParam">SearchQueryParam</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchResultPath">SearchResultPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchUrl">SearchUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata">IncidentUserDefinedFieldMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `SearchLimitParam`<sup>Required</sup> <a name="SearchLimitParam" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchLimitParam"></a>

```go
func SearchLimitParam() *string
```

- *Type:* *string

---

##### `SearchParams`<sup>Required</sup> <a name="SearchParams" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchParams"></a>

```go
func SearchParams() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `SearchQueryParam`<sup>Required</sup> <a name="SearchQueryParam" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchQueryParam"></a>

```go
func SearchQueryParam() *string
```

- *Type:* *string

---

##### `SearchResultPath`<sup>Required</sup> <a name="SearchResultPath" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchResultPath"></a>

```go
func SearchResultPath() *string
```

- *Type:* *string

---

##### `SearchUrl`<sup>Required</sup> <a name="SearchUrl" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.searchUrl"></a>

```go
func SearchUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() IncidentUserDefinedFieldMetadata
```

- *Type:* <a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldMetadata">IncidentUserDefinedFieldMetadata</a>

---


### IncidentUserDefinedFieldValidValueList <a name="IncidentUserDefinedFieldValidValueList" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/incidentuserdefinedfield"

incidentuserdefinedfield.NewIncidentUserDefinedFieldValidValueList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IncidentUserDefinedFieldValidValueList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get"></a>

```go
func Get(index *f64) IncidentUserDefinedFieldValidValueOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IncidentUserDefinedFieldValidValueOutputReference <a name="IncidentUserDefinedFieldValidValueOutputReference" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v16/incidentuserdefinedfield"

incidentuserdefinedfield.NewIncidentUserDefinedFieldValidValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IncidentUserDefinedFieldValidValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetShortDescription">ResetShortDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetShortDescription` <a name="ResetShortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.resetShortDescription"></a>

```go
func ResetShortDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayNameInput">DisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescriptionInput">ShortDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayName">DisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescription">ShortDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DisplayNameInput`<sup>Optional</sup> <a name="DisplayNameInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayNameInput"></a>

```go
func DisplayNameInput() *string
```

- *Type:* *string

---

##### `ShortDescriptionInput`<sup>Optional</sup> <a name="ShortDescriptionInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescriptionInput"></a>

```go
func ShortDescriptionInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DisplayName`<sup>Required</sup> <a name="DisplayName" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.displayName"></a>

```go
func DisplayName() *string
```

- *Type:* *string

---

##### `ShortDescription`<sup>Required</sup> <a name="ShortDescription" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.shortDescription"></a>

```go
func ShortDescription() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-datadog.incidentUserDefinedField.IncidentUserDefinedFieldValidValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



