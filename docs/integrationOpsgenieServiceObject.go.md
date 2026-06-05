# `integrationOpsgenieServiceObject` Submodule <a name="`integrationOpsgenieServiceObject` Submodule" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IntegrationOpsgenieServiceObject <a name="IntegrationOpsgenieServiceObject" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject"></a>

Represents a {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_opsgenie_service_object datadog_integration_opsgenie_service_object}.

#### Initializers <a name="Initializers" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationopsgenieserviceobject"

integrationopsgenieserviceobject.NewIntegrationOpsgenieServiceObject(scope Construct, id *string, config IntegrationOpsgenieServiceObjectConfig) IntegrationOpsgenieServiceObject
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig">IntegrationOpsgenieServiceObjectConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig">IntegrationOpsgenieServiceObjectConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetCustomUrl">ResetCustomUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetId">ResetId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCustomUrl` <a name="ResetCustomUrl" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetCustomUrl"></a>

```go
func ResetCustomUrl()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.resetId"></a>

```go
func ResetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IntegrationOpsgenieServiceObject resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationopsgenieserviceobject"

integrationopsgenieserviceobject.IntegrationOpsgenieServiceObject_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationopsgenieserviceobject"

integrationopsgenieserviceobject.IntegrationOpsgenieServiceObject_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationopsgenieserviceobject"

integrationopsgenieserviceobject.IntegrationOpsgenieServiceObject_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationopsgenieserviceobject"

integrationopsgenieserviceobject.IntegrationOpsgenieServiceObject_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IntegrationOpsgenieServiceObject resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IntegrationOpsgenieServiceObject to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IntegrationOpsgenieServiceObject that should be imported.

Refer to the {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_opsgenie_service_object#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IntegrationOpsgenieServiceObject to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrlInput">CustomUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKeyInput">OpsgenieApiKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.regionInput">RegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrl">CustomUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKey">OpsgenieApiKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.region">Region</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CustomUrlInput`<sup>Optional</sup> <a name="CustomUrlInput" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrlInput"></a>

```go
func CustomUrlInput() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OpsgenieApiKeyInput`<sup>Optional</sup> <a name="OpsgenieApiKeyInput" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKeyInput"></a>

```go
func OpsgenieApiKeyInput() *string
```

- *Type:* *string

---

##### `RegionInput`<sup>Optional</sup> <a name="RegionInput" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.regionInput"></a>

```go
func RegionInput() *string
```

- *Type:* *string

---

##### `CustomUrl`<sup>Required</sup> <a name="CustomUrl" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.customUrl"></a>

```go
func CustomUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OpsgenieApiKey`<sup>Required</sup> <a name="OpsgenieApiKey" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.opsgenieApiKey"></a>

```go
func OpsgenieApiKey() *string
```

- *Type:* *string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.region"></a>

```go
func Region() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObject.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IntegrationOpsgenieServiceObjectConfig <a name="IntegrationOpsgenieServiceObjectConfig" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-datadog-go/datadog/v15/integrationopsgenieserviceobject"

&integrationopsgenieserviceobject.IntegrationOpsgenieServiceObjectConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	OpsgenieApiKey: *string,
	Region: *string,
	CustomUrl: *string,
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.name">Name</a></code> | <code>*string</code> | The name for the Opsgenie service. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.opsgenieApiKey">OpsgenieApiKey</a></code> | <code>*string</code> | The Opsgenie API key for the Opsgenie service. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.region">Region</a></code> | <code>*string</code> | The region for the Opsgenie service. Valid values are `us`, `eu`, `custom`. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.customUrl">CustomUrl</a></code> | <code>*string</code> | The custom url for a custom region. |
| <code><a href="#@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.id">Id</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_opsgenie_service_object#id IntegrationOpsgenieServiceObject#id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name for the Opsgenie service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_opsgenie_service_object#name IntegrationOpsgenieServiceObject#name}

---

##### `OpsgenieApiKey`<sup>Required</sup> <a name="OpsgenieApiKey" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.opsgenieApiKey"></a>

```go
OpsgenieApiKey *string
```

- *Type:* *string

The Opsgenie API key for the Opsgenie service.

Note: Since the Datadog API never returns Opsgenie API keys, it is impossible to detect [drifts](https://www.hashicorp.com/blog/detecting-and-managing-drift-with-terraform). The best way to solve a drift is to manually mark the Service Object resource with [terraform taint](https://www.terraform.io/docs/commands/taint.html) to have it destroyed and recreated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_opsgenie_service_object#opsgenie_api_key IntegrationOpsgenieServiceObject#opsgenie_api_key}

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.region"></a>

```go
Region *string
```

- *Type:* *string

The region for the Opsgenie service. Valid values are `us`, `eu`, `custom`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_opsgenie_service_object#region IntegrationOpsgenieServiceObject#region}

---

##### `CustomUrl`<sup>Optional</sup> <a name="CustomUrl" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.customUrl"></a>

```go
CustomUrl *string
```

- *Type:* *string

The custom url for a custom region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_opsgenie_service_object#custom_url IntegrationOpsgenieServiceObject#custom_url}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-datadog.integrationOpsgenieServiceObject.IntegrationOpsgenieServiceObjectConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/datadog/datadog/4.12.1/docs/resources/integration_opsgenie_service_object#id IntegrationOpsgenieServiceObject#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



